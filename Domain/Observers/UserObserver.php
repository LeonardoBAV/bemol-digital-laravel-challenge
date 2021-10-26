<?php

namespace Modules\BemolDigitalLaravelChallenge\Domain\Observers;

use Illuminate\Support\Facades\Hash;
use Modules\BemolDigitalLaravelChallenge\Domain\Entities\User;

class UserObserver
{

    public function creating(User $user)
	{
		$user->password = Hash::make($user->password);
	}	

	public function updating(User $user)
	{
		if($user->isDirty('password')){
			$user->password = Hash::make($user->password);
		}
	}

}