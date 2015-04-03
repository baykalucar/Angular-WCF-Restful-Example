using MyServices.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;

namespace MyServices
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the interface name "IRestfulService" in both code and config file together.
    [ServiceContract]
    public interface IRestfulService : IAuthentication, ISomeWork
    {
    }
}
