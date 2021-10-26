<?php

namespace Modules\BemolDigitalLaravelChallenge\Presentation\Http\Controllers\API;

use Exception;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\BemolDigitalLaravelChallenge\Application\Http\Requests\SaveUserRequest;
use Modules\BemolDigitalLaravelChallenge\Domain\Entities\User;
use Modules\BemolDigitalLaravelChallenge\Domain\Services\UserService;

class UserController extends Controller
{

    
    function __construct(public UserService $userService){}

    
    public function index()
    {
        try {
            return response()->json($this->userService->list(), 200);
        } catch (Exception $e) {
            return response()->json(['error' => ['message' => $e->getMessage()]], 500);    
        }
    }

    public function edit(Request $request, User $user)
    {
        try {
            return response()->json($this->userService->edit($user), 200);
        } catch (Exception $e) {
            return response()->json(['error' => ['message' => $e->getMessage()]], 500);    
        }
    }

    public function store(SaveUserRequest $request)
    {
        try {
            return response()->json($this->userService->create($request->all()), 201);
        } catch (Exception $e) {
            return response()->json(['error' => ['message' => $e->getMessage()]], 500);    
        }
    }

    public function update(SaveUserRequest $request, User $user)
    {
        try {
            return response()->json($this->userService->update($request->all(), $user), 200);
        } catch (Exception $e) {
            return response()->json(['error' => ['message' => $e->getMessage()]], 500);    
        }
    }

    public function destroy(Request $request, User $user)
    {
        try {
            return response()->json($this->userService->destroy($user), 200);
        } catch (Exception $e) {
            return response()->json(['error' => ['message' => $e->getMessage()]], 500);    
        }
    }

}
