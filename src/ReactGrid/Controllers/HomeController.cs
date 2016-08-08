using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace ReactGrid.Controllers
{
    public class HomeController : Controller
    {
        [HttpGet("/Test")]
        public object Test()
        {
            return new
            {
                Data = new List<string>
                {
                    "Data1",
                    "Data2",
                    "Data3"
                }
            };
        }
    }
}