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

class DoctorController extends Controller
{

    /*public function __construct()
    {
        $this->middleware('noodent.auth');
    }*/

    public function save(Request $request){

        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'gender' => 'required',
            'email' => 'required|email',
            'phone' => 'required',
            'professionalStatement' => 'required'
        ]);
        if ($validator->fails()) {
            return response()->json(["error_code" => 4001, "error_message" => $validator->messages()], 200);
        }

        try{

            $token = $request->header("token");

            $userId = Controller::getUserIdFromJWT($token);
            
            $name = $request->name;
            $gender = $request->gender;
            $email = $request->email;
            $phone = $request->phone;
            $professionalStatement = $request->professionalStatement;
            $affliations = $request->affliations;
            $certificates = $request->certificates;
            $awards = $request->awards;
            $languages = $request->language;
            $procedures = $request->procedures;
            $educations = $request->educations;

            $data = array("name" => $name, "gender"=>$gender, "email"=> $email, "phone"=>$phone,"professionalStatement"=>$professionalStatement,
			"affliations"=>$affliations, "certificates"=>$certificates, "awards"=>$awards, "languages"=>$languages,
			"procedures"=>$procedures, "educations"=>$educations);

            $data_string = json_encode($data);

            $basePath = config('app.basepath');

            $ch = curl_init($basePath.'/doctor/save');
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
            throw new \Dingo\Api\Exception\StoreResourceFailedException('Unable to save doctor. Try after some time.'. $e->getMessage());
        }

        return $result;
    }

    public function fetchProcedures(Request $request){

        try{

            $token = $request->header("token");

            $userId = Controller::getUserIdFromJWT($token);

            $basePath = config('app.basepath');

            $ch = curl_init();

            curl_setopt($ch,CURLOPT_URL,$basePath.'/procedures/fetch');
            curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
            curl_setopt($ch, CURLOPT_HTTPHEADER, array(
                    'Content-Type: application/json',
                    'userId:'.$userId,)
            );
            $result = curl_exec($ch);
        }
        catch(\Exception $e){
            throw new \Dingo\Api\Exception\StoreResourceFailedException('Unable to clinic procedures .'. $e->getMessage());
        }

        return $result;
    }

}
