<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();

            $table->longText("title");
            $table->string("type_of_paper");
            $table->string("subject_area");
            $table->longText("paper_details");
            $table->string("addition_materials");
            $table->string("paper_format");
            $table->string("prefered_english");
            $table->string("number_of_sources");
            $table->string("spacing");
            $table->string("academic_level");
            $table->string("urgency");

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
}
