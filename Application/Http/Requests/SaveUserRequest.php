<?php

namespace Modules\BemolDigitalLaravelChallenge\Application\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;
use Carbon\Carbon;

class SaveUserRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        //dd('required|string|email|max:150|unique:users,email'.(isset($this->id)?','.$this->id:''));
        return [
            'name' => 'required|string|max:150',
            'email' => 'required|string|email|max:150|unique:users,email'.(isset($this->id)?','.$this->id:''),
            'password' => (isset($this->id)?'':'required|string|min:6').'',
            'ddd' => 'digits:2',
            'phone' => 'digits:9',
            'cpf' => 'digits:11', 
            'birth' => 'required|date',
            'address.postcode' => 'required|digits:8',
            'address.st' => 'alpha|string|size:2',
            'address.city' => 'string|max:150',
            'address.neighborhood' => 'string|max:150',
            'address.street' => 'string|max:150',
            'address.number' => 'numeric'
        ];
    }

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    protected function failedValidation(Validator $validator)
    {
        $response = response()->json(['error' => $validator->errors()], 422);
        throw new ValidationException($validator, $response);
    }

    protected function prepareForValidation()
    {
        $this->parseBirth();
        $this->filterAlphaNumericToNumeric();
    }

    private function parseBirth(){
        Carbon::parse($this->birth);
        $this->merge([
            'birth'=> Carbon::parse($this->birth)->format('Y-m-d'),
        ]);
    }

    private function filterAlphaNumericToNumeric(){
        $this->merge([
            'ddd'=> preg_replace("/[^0-9]/", "", $this->ddd),
            'phone' => preg_replace("/[^0-9]/", "", $this->phone),
            'cpf' => preg_replace("/[^0-9]/", "", $this->cpf),
            'address' => collect($this->address)->put('postcode', preg_replace("/[^0-9]/", "", $this->address['postcode']))->toArray()
        ]);
    }
    
}
