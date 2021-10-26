<?php

namespace Modules\BemolDigitalLaravelChallenge\Domain\Services;

use Exception;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Http;
use Modules\BemolDigitalLaravelChallenge\Domain\DTOs\AddressCEPDTO;

class CEPService {

    const API_URL = 'https://viacep.com.br/ws/'; // put this in a conf file

    public function getInfoAddress($cep){

        $response = Http::get(CEPService::API_URL.$cep.'/json')->collect();
        if($response->has('erro')){
            throw new Exception('CEP inválido');
        } else {
            return $response;
        }
    }

    public function getST($cep){
        $data = $this->getInfoAddress($cep);
        return $data->get('uf');
    }



}