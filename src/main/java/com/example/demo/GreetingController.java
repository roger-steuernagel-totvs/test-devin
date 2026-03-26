package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GreetingController {

    @GetMapping("/hello")
    public String hello() {
        return "HELLO WORLD";
    }

    @GetMapping("/echo/{message}")
    public String echo(@PathVariable String message) {
        return "HI " + message;
    }
}
