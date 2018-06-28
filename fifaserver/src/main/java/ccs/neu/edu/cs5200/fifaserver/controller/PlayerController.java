package ccs.neu.edu.cs5200.fifaserver.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/player")
public class PlayerController {
  @RequestMapping(method = RequestMethod.GET, value = "/hello")
  public String sayHello() {
    return "Yes, hello from player";
  }

}
