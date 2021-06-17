<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class OrderResource extends JsonResource
{

    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'topic' => $this->topic,
            'type_of_paper' => $this->type_of_paper,
            'subject_area' => $this->subject_area,
            'paper_details' => $this->paper_details,
            'addition_materials' => $this->addition_materials,
            'paper_format' => $this->paper_format,
            'prefered_english' => $this->prefered_english,
            'number_of_sources' => $this->number_of_sources,
            'spacing' => $this->spacing,
            'academic_level' => $this->academic_level,
            'urgency' => $this->urgency,
            'stage' => $this->stage,
            'created_at_date' => date('j M Y' ,strtotime($this->created_at)),
            'created_at_time' => date('H:i' ,strtotime($this->created_at))

        ];
    }
}