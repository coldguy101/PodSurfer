package com.credera;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

@Controller
public class MainController {
	@RequestMapping("/map")
	public @ResponseBody String map() {
		return "map";
	}

	@RequestMapping("/mentors")
	public @ResponseBody MentorResponse[] mentors() {
		MentorResponse[] mentors = {
			new MentorResponse("Kelleigh Maroney", "kmaroney@credera.com", "Baylor University"),
			new MentorResponse("John Lutteringer", "jlutteringer@credera.com", "Baylor University"),
			new MentorResponse("Ali Shan Momin", "amomin@credera.com", "Texas A&M University"),
			new MentorResponse("Graeme Scruggs", "gscruggs@credera.com", "Southern Methodist University"),
			new MentorResponse("Trey Sedate", "tsedate@credera.com", "Baylor University"),
			new MentorResponse("Christopher Blewett", "cblewett@credera.com", "Baylor University")
		};
		return mentors;
	}


	// Access this endpoint for Milestone 1.
	// Do not delete this endpoint
	// Endpoint returns the current date and time in milliseconds
	@RequestMapping("/currentDate")
	public @ResponseBody Date test() {
		return new Date();
	}
}
