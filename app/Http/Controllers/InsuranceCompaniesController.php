<?php
/**
 * Doctoury - Lumen framework
 *
 * PHP version 5.5.9
 *
 * @category   PHP
 * @package    REST
 * @subpackage Core
 * @author     Mugundhan. A (mugundhan_352at15)
 * @copyright  2016 Agriya
 * @license    http://www.agriya.com/ Agriya Licence
 * @link       http://www.agriya.com
 * @since      2016-03-28
 */
 
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\InsuranceCompany;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

/**
 * Contacts resource representation.
 * @Resource("InsuranceCompanies")
 */
 
class InsuranceCompaniesController extends Controller
{
	/**
     * Show all insurance companies
     * Get a JSON representation of all the insurance companies.
     * @Get("/insurance_companies?sort={sort}")
     * @Parameters({
     *      @Parameter("sort", type="string", required=false, description="Sort the insurance companies list by sort ley.", default=null),
     * })
     */
    public function index(Request $request)
    {
        $insurance_companies = InsuranceCompany::filterByRequest($request)->get();
        return $insurance_companies;
    }
}