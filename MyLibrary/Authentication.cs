using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Runtime.Serialization;

namespace MyLibrary
{
    public class Authentication
    {
        public static AuthenticationResult AuthenticateUser(AuthenticationRequest authenticationRequest)
        {
            AuthenticationResult authResult = new AuthenticationResult();
            if (authenticationRequest.UserName == "baykal" || authenticationRequest.Password == "1234")
            {
                byte[] time = BitConverter.GetBytes(DateTime.UtcNow.ToBinary());
                byte[] key = Guid.NewGuid().ToByteArray();
                authResult.AuthenticationToken = Convert.ToBase64String(time.Concat(key).ToArray());
                authResult.IsAuthenticated = true;
                authResult.AuthenticationTime = DateTime.Now;

            }
            else
            {
                authResult.IsAuthenticated = false;
                authResult.AuthenticationTime = DateTime.MinValue;
            }
            return authResult;
        }
    }
    [DataContract]
    public class AuthenticationResult
    {
        [DataMember]
        public bool IsAuthenticated { get; set; }
        [DataMember]
        public string AuthenticationToken { get; set; }
        [DataMember]
        public DateTime AuthenticationTime { get; set; }
        

    }

    [DataContract]
    public class AuthenticationRequest
    {
        [DataMember]
        public string UserName { get; set; }
        [DataMember]
        public string Password { get; set; }

    }
}
