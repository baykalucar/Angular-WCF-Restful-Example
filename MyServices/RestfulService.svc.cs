using MyServices.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;
using System.Security.Permissions;

namespace MyServices
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "RestfulService" in code, svc and config file together.
    // NOTE: In order to launch WCF Test Client for testing this service, please select RestfulService.svc or RestfulService.svc.cs at the Solution Explorer and start debugging.
    public class RestfulService : IRestfulService
    {

        
        public MyLibrary.AuthenticationResult AuthenticateUser(MyLibrary.AuthenticationRequest authenticationRequest)
        {
            return MyLibrary.Authentication.AuthenticateUser(authenticationRequest);
        }

        [PrincipalPermission(SecurityAction.Demand, Role = "User")]
        public MyLibrary.WorkResult DoWork(MyLibrary.WorkRequest req)
        {
            return MyLibrary.SomeWork.DoWork(req);
        }
    }
}
