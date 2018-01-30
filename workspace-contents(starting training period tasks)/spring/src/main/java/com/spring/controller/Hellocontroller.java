package com.spring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
/*import org.springframework.web.bind.annotation.ResponseBody;*/

@RequestMapping(value="/hello")
@Controller
public class Hellocontroller {

	@RequestMapping(value="/show", method=RequestMethod.GET)
	private  String show(Model obj){
		
		obj.addAttribute("message", "this is nirmal");
		
		return "hello";
	}
}
