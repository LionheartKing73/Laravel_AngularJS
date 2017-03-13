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

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;
use Dingo\Api\Routing\Helpers;
use Illuminate\Http\Request;
use App\Http\Requests;
use \Firebase\JWT\JWT;

class Controller extends BaseController {
    use Helpers;
    public function __construct() {
        
        //date_default_timezone_set('Europe/Luxembourg');
    }

    /*public function sendSMS($mobileNumbers, $message) {
        $to = "[\"$mobileNumbers\]";
        $authToken = config('clickatell.authtoken');
        echo $authToken; die;
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, "https://api.clickatell.com/rest/message");
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, "{\"text\":\"$message\",\"to\":$to}");
        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            "X-Version: 1",
            "Content-Type: application/json",
            "Accept: application/json",
            "Authorization: Bearer $authToken"
        ));
        $result = curl_exec($ch);
    }*/

    public function getUserIdFromJWT($jwt){

        $jwtSecret = env("JWT_SECRET");
        $jwt = JWT::decode($jwt, $jwtSecret, array('HS256'));
        return $jwt->uid;
    }

}
