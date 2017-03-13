<?php
/**
 * Created by PhpStorm.
 * User: ni5
 * Date: 24/1/17
 * Time: 2:48 PM
 */

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;

use Validator;

class UserController extends Controller
{

    /*public function __construct()
    {
        $this->middleware('noodent.auth');
    }*/

    public function inviteUser(Request $request){

        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'roleId' => 'required'
        ]);
        if ($validator->fails()) {
            return response()->json(["error_code" => 4001, "error_message" => $validator->messages()], 200);
        }


        try{

            $token = $request->header("token");


            if(!$request->exists("id")){
                $userId = Controller::getUserIdFromJWT($token);
            }else{
                $userId = $request->id;
            }
            $encryptedPassword = Hash::make("123456");
            $email = $request->email;
            $name = $request->name;
            $roleId = $request->roleId;

            $data = array("name" => $name, "email"=>$email, "encryptedPassword"=> $encryptedPassword, "roleId"=>$roleId);
            $data_string = json_encode($data);

            $basePath = config('app.basepath');

            $ch = curl_init($basePath.'/user/saveUser');
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
            curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_HTTPHEADER, array(
                    'Content-Type: application/json',
                    'Content-Length: ' . strlen($data_string),
                    'userId:'.$userId,)
            );
            $result = curl_exec($ch);
        }
        catch(\Exception $e){
            throw new \Dingo\Api\Exception\StoreResourceFailedException('Unable to invite user for now. Try after some time.'. $e->getMessage());
        }

        return $result;
    }


    public function permissions(Request $request){

        try{

            $token = $request->header("token");

            $userId = Controller::getUserIdFromJWT($token);

            $basePath = config('app.basepath');

            $ch = curl_init();

            curl_setopt($ch,CURLOPT_URL,$basePath.'/user/permissions');
            curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
            curl_setopt($ch, CURLOPT_HTTPHEADER, array(
                    'Content-Type: application/json',
                    'userId:'.$userId,)
            );
            $result = curl_exec($ch);
        }
        catch(\Exception $e){
            throw new \Dingo\Api\Exception\StoreResourceFailedException('Unable to fetch permissions .'. $e->getMessage());
        }

        return $result;
    }

    public function saveRole(Request $request){

        try{

            $token = $request->header("token");
            $name = $request->name;
            $description = $request->description;
            $rights = $request->rights;

            $userId = Controller::getUserIdFromJWT($token);

            $data = array("name" => $name, "description"=>$description, "rights"=> $rights);
            $data_string = json_encode($data);

            $basePath = config('app.basepath');

            $ch = curl_init($basePath.'/user/saveRole');
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
            curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_HTTPHEADER, array(
                    'Content-Type: application/json',
                    'Content-Length: ' . strlen($data_string),
                    'userId:'.$userId,)
            );
            $result = curl_exec($ch);
        }
        catch(\Exception $e){
            throw new \Dingo\Api\Exception\StoreResourceFailedException('Unable to save role .'. $e->getMessage());
        }

        return $result;
    }

    public function fetchProcess(Request $request){

        try{

            $token = $request->header("token");
           
            $userId = Controller::getUserIdFromJWT($token);

            $basePath = config('app.basepath');
		
            $ch = curl_init();

            curl_setopt($ch,CURLOPT_URL,$basePath.'/user/fetchProcess');
            curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
            curl_setopt($ch, CURLOPT_HTTPHEADER, array(
                    'Content-Type: application/json',
                    'userId:'.$userId,)
            );
            $result = curl_exec($ch);
        }
        catch(\Exception $e){
            throw new \Dingo\Api\Exception\StoreResourceFailedException('Unable to save role .'. $e->getMessage());
        }

        return $result;
    }

    public function confirm(Request $request){

        try{

            $token = $request->token;
           
            $basePath = config('app.basepath');
		
            $ch = curl_init();

            curl_setopt($ch,CURLOPT_URL,$basePath.'/user/confirm?token='.$token);
            curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
            curl_setopt($ch, CURLOPT_HTTPHEADER, array(
                    'Content-Type: application/json',)
            );
            $result = curl_exec($ch);
        }
        catch(\Exception $e){
            throw new \Dingo\Api\Exception\StoreResourceFailedException('Unable to save role .'. $e->getMessage());
        }

        return $result;
    }

    public function rights(Request $request){

        try{

            $token = $request->header("token");
           
            $userId = Controller::getUserIdFromJWT($token);

            $basePath = config('app.basepath');
		
            $ch = curl_init();

            curl_setopt($ch,CURLOPT_URL,$basePath.'/user/rights');
            curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
            curl_setopt($ch, CURLOPT_HTTPHEADER, array(
                    'Content-Type: application/json',
                    'userId:'.$userId,)
            );
            $result = curl_exec($ch);
        }
        catch(\Exception $e){
            throw new \Dingo\Api\Exception\StoreResourceFailedException('Unable to save role .'. $e->getMessage());
        }

        return $result;
    }

}
