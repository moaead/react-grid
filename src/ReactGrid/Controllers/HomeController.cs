using System;
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
                Draw = 1,
                RecordsTotal = 57,
                RecordsFiltered = 57,
                Data = new List<object>
                {
                    new
                    {
                        Id = 1,
                        FirstName = "Airi",
                        Lastname = "Satou",
                        Office = "Tokyo",
                        CreatedDate = DateTime.UtcNow
                    },
                    new
                    {
                        Id = 2,
                        FirstName = "Rick",
                        Lastname = "Smith",
                        Office = "New York",
                        CreatedDate = DateTime.UtcNow.AddMinutes(5)
                    }
                }
            };
        }
    }
}