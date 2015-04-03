using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Security.Principal;
using System.Threading;

namespace MyLibrary
{
    public class Principal
    {
        public static void SetCurrentThreadPrincipal(string token)
        {
            if (!String.IsNullOrEmpty(token))
            {
                string[] roles = { "User" };
                GenericIdentity identity = new GenericIdentity("baykal");
                GenericPrincipal principal = new GenericPrincipal(identity, roles);
                Thread.CurrentPrincipal = principal;
            }
        }
    }
}
