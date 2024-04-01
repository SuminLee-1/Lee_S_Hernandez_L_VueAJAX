<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Cocktail;


class CocktailController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */

    public function getAll()
    {
        $cocktails = Cocktail::all();
        return response()->json($cocktails);
    }

    public function getOne($id)
    {
        $cocktail = Cocktail::find($id);
        return response()->json($cocktail);
    }

    public function save(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'time' => 'required',
            'ingredients' => 'required',
            'garnish' => 'required',
            'instruction' => 'required',
            'glassType' => 'required',
        ]);
        $cocktail = Cocktail::create($request->all());
        return response()->json($cocktail, 201);
    }



    public function update(Request $request, $id)
    {
        $cocktail = Cocktail::findOrFail($id);

        $this->validate($request, [
            'name' => 'required',
            'time' => 'required',
            'ingredients' => 'required',
            'garnish' => 'required',
            'instruction' => 'required',
            'glassType' => 'required',
        ]);
        $cocktail->update($request->all());
        return response()->json($cocktail);
    }


    public function delete($id)
    {
        $cocktail = Cocktail::findOrFail($id);
        $cocktail->delete();
        return response()->json(null, 204);
    }




}
