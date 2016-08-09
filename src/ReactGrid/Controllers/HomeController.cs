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
        public string StartDate;
        public string Salary;
        
        public employee(List<string> a)
            {
                Name=a[0];
                Position=a[1];
                Office= a[2];
                Age= a[3];
                StartDate=a[4];
                Salary=a[5];
            }
    }
    public class HomeController : Controller
    {
        private List<List<string>> initData= new List<List<string>> { new List<string> {"Tiger Nixon","System Architect","Edinburgh","61","2011/04/25","$320,800"},new List<string> {"Garrett Winters","Accountant","Tokyo","63","2011/07/25","$170,750"},new List<string> {"Ashton Cox","Junior Technical Author","San Francisco","66","2009/01/12","$86,000"},new List<string> {"Cedric Kelly","Senior Javascript Developer","Edinburgh","22","2012/03/29","$433,060"},new List<string> {"Airi Satou","Accountant","Tokyo","33","2008/11/28","$162,700"},new List<string> {"Brielle Williamson","Integration Specialist","New List<string> York","61","2012/12/02","$372,000"},new List<string> {"Herrod Chandler","Sales Assistant","San Francisco","59","2012/08/06","$137,500"},new List<string> {"Rhona Davidson","Integration Specialist","Tokyo","55","2010/10/14","$327,900"},new List<string> {"Colleen Hurst","Javascript Developer","San Francisco","39","2009/09/15","$205,500"},new List<string> {"Sonya Frost","Software Engineer","Edinburgh","23","2008/12/13","$103,600"},new List<string> {"Jena Gaines","Office Manager","London","30","2008/12/19","$90,560"},new List<string> {"Quinn Flynn","Support Lead","Edinburgh","22","2013/03/03","$342,000"},new List<string> {"Charde Marshall","Regional Director","San Francisco","36","2008/10/16","$470,600"},new List<string> {"Haley Kennedy","Senior Marketing Designer","London","43","2012/12/18","$313,500"},new List<string> {"Tatyana Fitzpatrick","Regional Director","London","19","2010/03/17","$385,750"},new List<string> {"Michael Silva","Marketing Designer","London","66","2012/11/27","$198,500"},new List<string> {"Paul Byrd","Chief Financial Officer (CFO)","New List<string> York","64","2010/06/09","$725,000"},new List<string> {"Gloria Little","Systems Administrator","New List<string> York","59","2009/04/10","$237,500"},new List<string> {"Bradley Greer","Software Engineer","London","41","2012/10/13","$132,000"},new List<string> {"Dai Rios","Personnel Lead","Edinburgh","35","2012/09/26","$217,500"},new List<string> {"Jenette Caldwell","Development Lead","New List<string> York","30","2011/09/03","$345,000"},new List<string> {"Yuri Berry","Chief Marketing Officer (CMO)","New List<string> York","40","2009/06/25","$675,000"},new List<string> {"Caesar Vance","Pre-Sales Support","New List<string> York","21","2011/12/12","$106,450"},new List<string> {"Doris Wilder","Sales Assistant","Sidney","23","2010/09/20","$85,600"},new List<string> {"Angelica Ramos","Chief Executive Officer (CEO)","London","47","2009/10/09","$1,200,000"},new List<string> {"Gavin Joyce","Developer","Edinburgh","42","2010/12/22","$92,575"},new List<string> {"Jennifer Chang","Regional Director","Singapore","28","2010/11/14","$357,650"},new List<string> {"Brenden Wagner","Software Engineer","San Francisco","28","2011/06/07","$206,850"},new List<string> {"Fiona Green","Chief Operating Officer (COO)","San Francisco","48","2010/03/11","$850,000"},new List<string> {"Shou Itou","Regional Marketing","Tokyo","20","2011/08/14","$163,000"},new List<string> {"Michelle House","Integration Specialist","Sidney","37","2011/06/02","$95,400"},new List<string> {"Suki Burks","Developer","London","53","2009/10/22","$114,500"},new List<string> {"Prescott Bartlett","Technical Author","London","27","2011/05/07","$145,000"},new List<string> {"Gavin Cortez","Team Leader","San Francisco","22","2008/10/26","$235,500"},new List<string> {"Martena Mccray","Post-Sales support","Edinburgh","46","2011/03/09","$324,050"},new List<string> {"Unity Butler","Marketing Designer","San Francisco","47","2009/12/09","$85,675"},new List<string> {"Howard Hatfield","Office Manager","San Francisco","51","2008/12/16","$164,500"},new List<string> {"Hope Fuentes","Secretary","San Francisco","41","2010/02/12","$109,850"},new List<string> {"Vivian Harrell","Financial Controller","San Francisco","62","2009/02/14","$452,500"},new List<string> {"Timothy Mooney","Office Manager","London","37","2008/12/11","$136,200"},new List<string> {"Jackson Bradshaw","Director","New List<string> York","65","2008/09/26","$645,750"},new List<string> {"Olivia Liang","Support Engineer","Singapore","64","2011/02/03","$234,500"},new List<string> {"Bruno Nash","Software Engineer","London","38","2011/05/03","$163,500"},new List<string> {"Sakura Yamamoto","Support Engineer","Tokyo","37","2009/08/19","$139,575"},new List<string> {"Thor Walton","Developer","New List<string> York","61","2013/08/11","$98,540"},new List<string> {"Finn Camacho","Support Engineer","San Francisco","47","2009/07/07","$87,500"},new List<string> {"Serge Baldwin","Data Coordinator","Singapore","64","2012/04/09","$138,575"},new List<string> {"Zenaida Frank","Software Engineer","New List<string> York","63","2010/01/04","$125,250"},new List<string> {"Zorita Serrano","Software Engineer","San Francisco","56","2012/06/01","$115,000"},new List<string> {"Jennifer Acosta","Junior Javascript Developer","Edinburgh","43","2013/02/01","$75,650"},new List<string> {"Cara Stevens","Sales Assistant","New List<string> York","46","2011/12/06","$145,600"},new List<string> {"Hermione Butler","Regional Director","London","47","2011/03/21","$356,250"},new List<string> {"Lael Greer","Systems Administrator","London","21","2009/02/27","$103,500"},new List<string> {"Jonas Alexander","Developer","San Francisco","30","2010/07/14","$86,500"},new List<string> {"Shad Decker","Regional Director","Edinburgh","51","2008/11/13","$183,000"},new List<string> {"Michael Bruce","Javascript Developer","Singapore","29","2011/06/27","$183,000"},new List<string> {"Donna Snider","Customer Support","New York","27","2011/01/25","$112,000"}};
        [HttpGet("/Test")]
        public object Test()
        {
            var Data = new List<employee>();
                foreach (var item in this.initData)
                {
                    Data.Add(new employee(item));
                }
            return new
            {
                Data
            };
        }
    }
}


