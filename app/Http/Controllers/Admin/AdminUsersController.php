<?php
/**
 * AgriyaBase - Lumen framework
 *
 * PHP version 5.5.9
 *
 * @category   PHP
 * @package    REST
 * @subpackage Core
 * @author     Agriya <info@agriya.com>
 * @copyright  2016 Agriya
 * @license    http://www.agriya.com/ Agriya Licence
 * @link       http://www.agriya.com
 * @since      2016-03-28
 */

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\User;
use JWTAuth;
use Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Transformers\UserTransformer;
use Illuminate\Support\Facades\Hash;
use App\Services\UserService;

/**
 * Users resource representation.
 * @Resource("Admin/AdminUsers")
 */
class AdminUsersController extends Controller
{
    /**
     * @var UserService
     */
    protected $user_service;

    /**
     * AdminUsersController constructor.
     */
    public function __construct(UserService $user_Service)
    {
        // check whether the user is logged in or not.
        $this->middleware('jwt.auth');
        // Check the logged user role.
        $this->middleware('role');
        $this->UserService = $user_Service;
    }

    /**
     * Show all users
     * Get a JSON representation of all the users.
     *
     * @Get("/users?filter={filter}&sort={sort}&sortby={sortby}&type={type}&field={field}&q={q}")
     * @Parameters({
     *      @Parameter("filter", type="integer", required=false, description="Filter the users list by type.", default=null),
     *      @Parameter("sort", type="string", required=false, description="Sort the users list by sort ley.", default=null),
     *      @Parameter("sortby", type="string", required=false, description="Sort users by Ascending / Descending Order.", default=null),
     *      @Parameter("type", type="string", required=false, description="Display users By Listing Type.", default=null),
     *      @Parameter("field", type="string", required=false, description="Give Whatever Fields Needed by Comma Seperator.", default=null),
     *      @Parameter("q", type="string", required=false, description="Search users.", default=null),
     *      @Parameter("page", type="integer", required=false, description="The page of results to view.", default=1)
     * })
     */
    public function index(Request $request)
    {
        $users = User::with('LastLoginIp', 'RegisterIp')->filterByRequest($request)->paginate(20);
        return $this->response->paginator($users, (new UserTransformer)->setDefaultIncludes(['LastLoginIp', 'RegisterIp']));
    }

    /**
     * Store a new user.
     * Store a new city with a `role_id`, `username`, `email`, `password`, `is_active` and `is_email_confirmed`.
     * @Post("/users")
     * @Transaction({
     *      @Request({"role_id": 1, "name": "AHSAN", "email": "guest@gmail.com", "password": "XXXXXX", "is_active": 1, "is_email_confirmed": 1 }),
     *      @Response(200, body={"success": "Record has been added."}),
     *      @Response(422, body={"message": "Record could not be updated. Please, try again.", "errors": {"name": {}}, "status_code": 422})
     * })
     */
    public function store(Request $request)
    {
        $user_data = $request->only('role_id','username', 'email', 'password','is_email_confirmed');
        $validator = Validator::make($user_data, User::GetValidationRule());
        if ($validator->passes()) {
            if ($request->has('password')) {
                $user_data['password'] = Hash::make($request->password);
            }
            $user_data['is_active'] = true;
            $user = User::create($user_data);
            if ($user) {
                return response()->json(['Success' => 'User has been added'], 200);
            } else {
                throw new \Dingo\Api\Exception\StoreResourceFailedException('User could not be updated. Please, try again.');
            }
        } else {
            throw new \Dingo\Api\Exception\StoreResourceFailedException('User could not be updated. Please, try again.', $validator->errors());
        }
    }

    /**
     * Edit the specified user.
     * Edit the user with a `id`.
     * @Get("/users/{id}/edit")
     * @Transaction({
     *      @Request({"id": 1}),
     *      @Response(200, body={"id": 1, "role_id": 1, "name": "AHSAN", "email": "guest@gmail.com", "password": "XXXXXX", "is_active": 1, "is_email_confirmed": 1}),
     *      @Response(404, body={"message": "Invalid Request", "status_code": 404})
     * })
     */
    public function edit($id)
    {
        $user = User::find($id);
        if (!$user) {
            return $this->response->errorNotFound("Invalid Request");
        }
        return $this->response->item($user, new UserTransformer);
    }

    /**
     * Show the specified user.
     * Show the user with a `id`.
     * @Get("/users/{id}")
     * @Transaction({
     *      @Request({"id": 1}),
     *      @Response(200, body={"id": 1, "role_id": 1, "name": "AHSAN", "email": "guest@gmail.com", "password": "XXXXXX", "is_active": 1, "is_email_confirmed": 1}),
     *      @Response(404, body={"message": "Invalid Request", "status_code": 404})
     * })
     */
    public function show($id)
    {
        $user = User::find($id);
        if (!$user) {
            return $this->response->errorNotFound("Invalid Request");
        }
        return $this->response->item($user, (new UserTransformer)->setDefaultIncludes(['LastLoginIp', 'RegisterIp']));
    }

    /**
     * Update User
     * Update user with a `id`.
     * @Put("/users?id=1")
     * @Transaction({
     *      @Request({"id": 1}),
     *      @Response(200, body={"success": "Record has been updated."}),
     *      @Response(422, body={"message": "Record could not be updated. Please, try again.", "errors": {}, "status_code": 422})
     * })
     */
    public function update(Request $request, $id)
    {
        $user_data = $request->only('username', 'email', 'role_id', 'is_active', 'is_email_confirmed');
        $validator = Validator::make($user_data, array_merge(User::GetValidationRule(), User::GetEditValidationRule()));
        $user = false;
        if ($request->has('id')) {
            $user = User::find($id);
            $user = ($request->id != $id) ? false : $user;
            $user_is_active = $user->is_active;
        }
        $check_user = User::where('email', $request->email)
            ->where('id', '!=', $id)
            ->first();
        if ($check_user) {
            throw new \Dingo\Api\Exception\StoreResourceFailedException('User could not be updated. Email already exists.');
        }
        if ($validator->passes() && $user) {
            try {
                $user->update($user_data);
                if ($user_is_active !== $request->is_active && $request->is_active === 1) {
                    // send mail for active
                    $this->UserService->sendStatusMail($user->username, $user->email, 'Admin User Active');
                } else if ($user_is_active !== $request->is_active && $request->is_active === 0) {
                    // send mail for deactive
                    $this->UserService->sendStatusMail($user->username, $user->email, 'Admin User Deactivate');
                }
                return response()->json(['Success' => 'User has been updated'], 200);
            } catch (\Exception $e) {
                throw new \Dingo\Api\Exception\StoreResourceFailedException('User could not be updated. Please, try again.');
            }
        } else {
            throw new \Dingo\Api\Exception\StoreResourceFailedException('User could not be updated. Please, try again.', $validator->errors());
        }
    }

    /**
     * Delete the specified user.
     * Delete the user with a `id`.
     * @Delete("/users/{id}")
     * @Transaction({
     *      @Request({"id": 1}),
     *      @Response(200, body={"success": "Record Deleted."}),
     *      @Response(404, body={"message": "Invalid Request", "status_code": 404})
     * })
     */
    public function destroy($id)
    {
        $user = User::find($id);
        if (!$user) {
            return $this->response->errorNotFound("Invalid Request");
        } else {
            if ($user->delete()) {
                $this->UserService->sendStatusMail($user->username, $user->email, 'Admin User Delete');
                return response()->json(['Success' => 'User deleted'], 200);
            }
        }
    }
}
