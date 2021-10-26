<?php

namespace Modules\BemolDigitalLaravelChallenge\Domain\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class User extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'email', 'password', 'ddd', 'phone', 'cpf', 'birth'];
    
    protected static function newFactory()
    {
        return \Modules\BemolDigitalLaravelChallenge\Database\factories\UserFactory::new();
    }

    public function address()
    {
        return $this->hasOne(Address::class);
    }
}
