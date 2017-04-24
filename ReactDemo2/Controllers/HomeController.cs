using ReactDemo2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.UI;

namespace ReactDemo2.Controllers
{
    public class HomeController : Controller
    {
        private static readonly IList<CategoryModel> _categories;

        static HomeController() {
            _categories = new List<CategoryModel>() {
                new CategoryModel {Id = 1, CategoryName = "Action", Movies = new List<MovieModel> {
                    new MovieModel { Id = 1, Name = "The Godfather", Picture = "https://images-na.ssl-images-amazon.com/images/I/41%2BHJCUl3EL._SL160_.jpg"},
                    new MovieModel { Id = 3, Name = "The Dark Knight", Picture = "https://images-na.ssl-images-amazon.com/images/I/51xXNcbSAlL._SL160_.jpg"} }
                },
                new CategoryModel {Id = 2, CategoryName = "Comedy-drama", Movies = new List<MovieModel> {
                    new MovieModel { Id = 2, Name = "Forrest Gump", Picture = "https://images-na.ssl-images-amazon.com/images/I/41sc8hx7VaL._SL160_.jpg"} }
                }
            };
        }

        [OutputCache(Location = OutputCacheLocation.None)]
        public ActionResult Categories() {
            return Json(_categories, JsonRequestBehavior.AllowGet);
        }

        // GET: Home
        public ActionResult Index()
        {
            return View();
        }
    }
}