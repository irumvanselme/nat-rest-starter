package rw.ac.rca.nat2022.server.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("")
public class AppController {

    @GetMapping("")
    public String index() {
        return "Hello World!";
    }

    @GetMapping("/status")
    public String status(){
        return "The App Is Running .";
    }

}
