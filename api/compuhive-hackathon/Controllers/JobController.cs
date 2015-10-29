using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Cache;
using System.Web.Http;
using System.Web.Http.Cors;
using compuhive_hackathon.Models;

namespace compuhive_hackathon.Controllers
{

    //This is the cache
    public static class numbers
    {
        public static int number1 = 0;
        public static int number2 = 0;
        public static int number3 = 0;
        public static int key = 0;
        public static bool solved = false;
        public static FinishObject fo = new FinishObject
        
        {
            solveDate = ""
        };
    }


    [RoutePrefix("api")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class JobController : ApiController
    {


        //For when someone finishes the job
        [Route("finish")]
        [HttpPost]
        public String finishJob(FinishObject fo)
        {
            if (!numbers.solved && fo.token == numbers.key)
            {
                numbers.solved = true;
                numbers.fo = fo;
                numbers.fo.solveDate = fo.solveDate;
                return "Job finished. You were the first to solve the problem. Started at: " + fo.solveDate;
            }
            return "Job finished.";
        }


        //So we know when the job is finished (polling this)
        [Route("getjobstatus")]
        [HttpGet]
        public String getJobStatus()
        {
            if (numbers.solved)
            {
                return numbers.fo.solveDate;
            }
            else
            {
                return "Not solved.";
            }
        }


        //Once the job has finished we will reset so we can test some more
        [Route("resetfinish")]
        [HttpGet]
        public String resetFinish()
        {
            numbers.solved = false;
            numbers.fo.solveDate = "";

            return "The status has been reset.";
        }


        //Sets the cache values for the job
        [Route("updatenumbers/{num1}/{num2}/{num3}")]
        [HttpGet]
        public String updateNumbers(int num1, int num2, int num3)
        {
            numbers.number1 = num1;
            numbers.number2 = num2;
            numbers.number3 = num3;
            numbers.key++;
            return "Updated numbers: " + num1 + " and " + num2 + " and " + num3;
        }


        //Gets the cache values for the job
        [Route("getJob")]
        [HttpGet]
        public int[] getJob()
        {
            return new int[] { numbers.number1, numbers.number2, numbers.number3, numbers.key };
        }
    }
}
