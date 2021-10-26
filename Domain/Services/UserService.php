<?php

namespace Modules\BemolDigitalLaravelChallenge\Domain\Services;

use Carbon\Carbon;
use Exception;
use Modules\BemolDigitalLaravelChallenge\Domain\Entities\User;

class UserService {

    function __construct(public CEPService $cepService){}

    public function list(){
        return User::all();
    }

    public function edit(User $user){
        return $user->load('address');
    }

    public function create($data){
        $this->validationSave($data);
        $user = User::create($data);
        $user->address()->create($data['address']);
        $user->load('address');
        return $user;
    }

    public function update($data, User $user){
        $this->validationSave($data);
        $user->update($data);
        $user->address()->update($data['address']);        
        $user->load('address');
        return $user;
    }

    public function destroy(User $user){
        $user->delete();
        return $user->id;
    }

    private function validationSave($data){
        if($this->userIsNotFromAmazonas($data)){
            throw new Exception('Este CEP não pertence ao estado da Amazonas.');
        }
        if($this->userIsNotAdult($data)){
            throw new Exception('É necessário ter no mínimo 18 anos.');
        }
    }

    private function userIsNotFromAmazonas($data){
        $st = $this->cepService->getST($data['address']['postcode']);
        return $st != 'AM';
    }

    private function userIsNotAdult($data){
        $age = Carbon::parse(Carbon::parse($data['birth']))->diff(Carbon::now())->y;
        return $age < 18;
    }

}