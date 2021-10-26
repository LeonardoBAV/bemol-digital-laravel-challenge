<?php

namespace Modules\BemolDigitalLaravelChallenge\Domain\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Address extends Model
{
    use HasFactory;

    protected $table = 'adresses';
    protected $fillable = ['postcode', 'st', 'city', 'neighborhood', 'street', 'number'];
    
    protected static function newFactory()
    {
        return \Modules\BemolDigitalLaravelChallenge\Database\factories\AddressFactory::new();
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

}
