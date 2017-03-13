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

class ClinicController extends Controller
{

    /*public function __construct()
    {
        $this->middleware('noodent.auth');
    }*/

    public function save(Request $request){

        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'address1' => 'required',
            'perfecture' => 'required',
            'postalCode' => 'required|integer',
            'contactName' => 'required',
            'contactPhone' => 'required|integer',
            'latitude' => 'required',
            'longitude' => 'required',
            'cityId' => 'required'
        ]);
        if ($validator->fails()) {
            return response()->json(["error_code" => 4001, "error_message" => $validator->messages()], 200);
        }

        try{

            $token = $request->header("token");

            $userId = Controller::getUserIdFromJWT($token);
            
            $name = $request->name;
            $webAddress = $request->webAddress;
            $address1 = $request->address1;
            $address2 = $request->address2;
            $perfecture = $request->perfecture;
            $postalCode = $request->postalCode;
            $contactName = $request->contactName;
            $contactPhone = $request->contactPhone;
            $latitude = $request->latitude;
            $longitude = $request->longitude;
            $cityId = $request->cityId;

            $data = array("name" => $name, "webAddress"=>$webAddress, "address1"=> $address1, "address2"=>$address2,"perfecture"=>$perfecture,
			"cityId"=>$cityId, "postalCode"=>$postalCode, "contactName"=>$contactName, "contactPhone"=>$contactPhone, 
			"latitude"=>$latitude, "longitude"=>$longitude);

            $data_string = json_encode($data);

            $basePath = config('app.basepath');

            $ch = curl_init($basePath.'/clinic/save');
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
            throw new \Dingo\Api\Exception\StoreResourceFailedException('Unable to save clinic. Try after some time.'. $e->getMessage());
        }

        return $result;
    }


    public function fetchClinicProcedures(Request $request){

        try{

            $token = $request->header("token");

            $userId = Controller::getUserIdFromJWT($token);

            $basePath = config('app.basepath');

            $ch = curl_init();

            curl_setopt($ch,CURLOPT_URL,$basePath.'/clinic/procedure/fetch');
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

    public function fetchClinics(Request $request){

        try{

            $token = $request->header("token");

            $userId = Controller::getUserIdFromJWT($token);

            $basePath = config('app.basepath');

            $ch = curl_init();

            curl_setopt($ch,CURLOPT_URL,$basePath.'/clinic/fetch');
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

    public function saveClinicProcedures(Request $request){

        try{

            $token = $request->header("token");
	        $userId = Controller::getUserIdFromJWT($token);

            $procedure = $request->procedures;

            $basePath = config('app.basepath');

	        $data = array("procedures"=>$procedure);

            $data_string = json_encode($data);

            $ch = curl_init($basePath.'/clinic/procedure/save');
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
            throw new \Dingo\Api\Exception\StoreResourceFailedException('Unable to save procedure for clinic .'. $e->getMessage());
        }

        return $result;
    }

    public function roles(Request $request){

        try{

            $token = $request->header("token");

            $userId = Controller::getUserIdFromJWT($token);

            $basePath = config('app.basepath');

            $ch = curl_init();

            curl_setopt($ch,CURLOPT_URL,$basePath.'/clinic/roles');
            curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
            curl_setopt($ch, CURLOPT_HTTPHEADER, array(
                    'Content-Type: application/json',
                    'userId:'.$userId,)
            );
            $result = curl_exec($ch);
        }
        catch(\Exception $e){
            throw new \Dingo\Api\Exception\StoreResourceFailedException('Unable to fetch roles .'. $e->getMessage());
        }

        return $result;
    }

    

}
