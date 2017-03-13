<?php

/**
 * User: vijayanand_04ac09
 * Date: 2016-04-07
 * Time: 11:15 PM
 */

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\UserView;
use JWTAuth;
use Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Transformers\UserViewTransformer;

/**
 * UserViews resource representation.
 *
 * @Resource("UserViews")
 */
class AdminUserViewsController extends Controller {

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct() {
        // check whether the user is logged in or not.
        $this->middleware('jwt.auth');
        // Check the logged user role.
        $this->middleware('role');
    }

    /**
     * Show all userviews
     *
     * Get a JSON representation of all the user views.
     *
     * @Get("/user_views?filter={filter}&sort={sort}&sortby={sortby}&type={type}&field={field}&q={q}")
     * @Parameters({
     *      @Parameter("filter", type="integer", required=false, description="Filter the user views list by type.", default=null),
     *      @Parameter("sort", type="string", required=false, description="Sort the user views list by sort ley.", default=null),
     *      @Parameter("sortby", type="string", required=false, description="Sort user views by Ascending / Descending Order.", default=null),
     *      @Parameter("type", type="string", required=false, description="Display user views By Listing Type.", default=null),
     *      @Parameter("field", type="string", required=false, description="Give Whatever Fields Needed by Comma Seperator.", default=null),
     *      @Parameter("q", type="string", required=false, description="Search user views.", default=null),
     *      @Parameter("page", type="integer", required=false, description="The page of results to view.", default=1)
     * })
     */
    public function index(Request $request) {
        $user_views = UserView::paginate(20);
        return $this->response->paginator($user_views, (new UserViewTransformer)->setDefaultIncludes(['User']));
    }

    /**
     * Delete User Views
     *
     * Delete User Views with a `id`.
     *
     * @Delete("/user_views?id=1")
     * @Transaction({
     *      @Request({"id": 1}),
     *      @Response(200, body={"success": {"id": {"Record Deleted Successfully."}}}),
     *      @Response(404, body={"error": {"id": {"Record not found."}}})
     * })
     */
    public function destroy($id) {
        $user_view = UserView::find($id);
        if (!$user_view) {
            return $this->response->errorNotFound("Invalid Request");
        } else {
            $user_view->delete();
        }
        return response()->json(['Success' => 'User View deleted'], 200);
    }

}
