<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Drink;


class DrinkController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */

    public function getAll()
    {
        $books = Drink::all();
        return response()->json($books);
    }

    public function getOne($id)
    {
        $drink = Drink::find($id);
        return response()->json($drink);
    }

    public function save(Request $request)
    {
        $this->validate($request, [
            'cocktail_name' => 'required',
            'ingridients' => 'required',
            'instructions' => 'required|date',
            'drink_image' => 'required'
        ]);
        $drink = Drink::create($request->all());
        return response()->json($drink, 201);
    }



    public function update(Request $request, $id)
    {
        $drink = Drink::findOrFail($id);

        $this->validate($request, [
            'cocktail_name' => 'required',
            'ingridients' => 'required',
            'instructions' => 'required|date',
            'drink_image' => 'required'
        ]);
        $drink->update($request->all());
        return response()->json($drink);
    }


    public function delete($id)
    {
        $drink = Drink::findOrFail($id);
        $drink->delete();
        return response()->json(null, 204);
    }




}
