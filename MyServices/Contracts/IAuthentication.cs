using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Threading.Tasks;

namespace MyServices.Contracts
{
    [ServiceContract]
    public interface IAuthentication
    {
        [WebInvoke(ResponseFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Bare, UriTemplate = "authenticate", Method = "POST")]
        [OperationContract]
        MyLibrary.AuthenticationResult AuthenticateUser(MyLibrary.AuthenticationRequest authenticationRequest);
    }
}
