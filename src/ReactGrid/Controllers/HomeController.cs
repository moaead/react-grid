using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace ReactGrid.Controllers
{
    class employee
    {
        public string Name;
        public string Position;
        public string Office;
        public string Age;
        public string Start_date;
        public string Salary;

        public employee(string a)
            {
                Name=a;
                Position="Developer";
                Office= "Accountant";
                Age= "22";
                Start_date="2008/11/28";
                Salary="162,700";
            }
    }
    public class HomeController : Controller
    {
        [HttpGet("/Test")]
        public object Test()
        {
            return new
            {
                Data = new List<employee>
                {
                    new employee("ahmad"),new employee("faisal"),new employee("basel"),new employee("moead")
                }
            };
        }
    }
}


