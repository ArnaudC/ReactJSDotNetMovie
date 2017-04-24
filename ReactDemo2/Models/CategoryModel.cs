using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ReactDemo2.Models {
    public class CategoryModel {
        public int Id { get; set; }
        public string CategoryName { get; set; }
        public List<MovieModel> Movies { get; set; }
    }
}