using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Threading.Tasks;
using System.Security.Permissions;

namespace MyServices.Contracts
{
    [ServiceContract]
    public interface ISomeWork
    {
        [WebInvoke(ResponseFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Bare, UriTemplate = "dowork", Method = "POST")]
        [OperationContract]
        MyLibrary.WorkResult DoWork(MyLibrary.WorkRequest req);
    }
}
