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

namespace app\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Language;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Transformers\LanguageTransformer;

/**
 * Contacts resource representation.
 * @Resource("Languages")
 */
class LanguagesController extends Controller
{
    /**
     * Show all languages
     * Get a JSON representation of all the languages.
     * @Get("/languages?sort={sort}")
     * @Parameters({
     *      @Parameter("sort", type="string", required=false, description="Sort the language list by sort ley.", default=null),
     * })
     */
    public function index(Request $request)
    {
        $languages = Language::filterByRequest($request)->get();
        return $this->response->collection($languages, new LanguageTransformer);
    }

    public function fetchLanguages(Request $request){

        try{

            $token = $request->header("token");

            $userId = Controller::getUserIdFromJWT($token);

            $basePath = config('app.basepath');

            $ch = curl_init();

            curl_setopt($ch,CURLOPT_URL,$basePath.'/languages/fetch');
            curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
            curl_setopt($ch, CURLOPT_HTTPHEADER, array(
                    'Content-Type: application/json',
                    'userId:'.$userId,)
            );
            $result = curl_exec($ch);
        }
        catch(\Exception $e){
            throw new \Dingo\Api\Exception\StoreResourceFailedException('Unable to fetch languages .'. $e->getMessage());
        }

        return $result;
    }
}