﻿using System.Web.Mvc;
using MTGO.Common.Models;
using MTGO.Web.Helpers;
using MTGO.Web.Infastructure;
using MTGO.Web.Models;

namespace MTGO.Web.Controllers
{
    public class TriviaController : Controller
    {
        //
        // GET: /Trivia/
        private MainDbContext _db = new MainDbContext();

        [TwitchAuthorize]
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        [TwitchAuthorize]
        public ActionResult Index(TriviaModel model)
        {
            if (ModelState.IsValid)
            {
                var user = _db.Users.Find(User.GetUserId());
                Pipe.SendMessage("{0}|TriviaGame|{1}",
                    user.TwitchUsername,
                    model.Name);
            }
            return View();
        }


    }
}
