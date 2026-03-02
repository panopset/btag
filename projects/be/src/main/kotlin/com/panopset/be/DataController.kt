package com.panopset.be

import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping(path = ["/be"])
@CrossOrigin(origins = ["http://localhost:4200"])
class DataController {
    @GetMapping(path = ["/data"])
    fun getData(
        @RequestParam name: String
    ): ResponseEntity<String> {
        val rtn = "Hello $name"
        println("Data: $rtn")
        return ResponseEntity.ok(JsonHelper<String>().object2json(rtn))
    }
}
