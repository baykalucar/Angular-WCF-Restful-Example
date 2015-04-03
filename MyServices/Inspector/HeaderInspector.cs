using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ServiceModel;
using System.ServiceModel.Dispatcher;
using System.ServiceModel.Channels;
using System.ServiceModel.Description;
using System.ServiceModel.Configuration;
using System.Collections.ObjectModel;
using System.Threading;
using System.IO;
using System.Security.Principal;

namespace MyServices.Inspector.Extensions
{
    public class MessageInspector : IDispatchMessageInspector
    {
        public object AfterReceiveRequest(ref Message request, IClientChannel channel, InstanceContext instanceContext)
        {
            var header = request.Headers;
            var prop = (HttpRequestMessageProperty)request.Properties[HttpRequestMessageProperty.Name];
            var token = prop.Headers["AuthenticationToken"];
            var clientIP = prop.Headers["ClientIP"];

            MyLibrary.Principal.SetCurrentThreadPrincipal(token);
            
            return null;
        }

        public void BeforeSendReply(ref Message reply, object correlationState)
        {
        }
    }



    public class MessageInspectorBehavior : IEndpointBehavior
    {
        public void AddBindingParameters(ServiceEndpoint endpoint, BindingParameterCollection bindingParameters)
        {
        }

        public void ApplyClientBehavior(ServiceEndpoint endpoint, ClientRuntime clientRuntime)
        {
            throw new Exception("Behavior not supported on the consumer side!");
        }

        public void ApplyDispatchBehavior(ServiceEndpoint endpoint, EndpointDispatcher endpointDispatcher)
        {
            MessageInspector inspector = new MessageInspector();
            endpointDispatcher.DispatchRuntime.MessageInspectors.Add(inspector);

        }

        public void Validate(ServiceEndpoint endpoint)
        {
        }
    }

    public class MessageInspectorBehaviorExtensionElement : BehaviorExtensionElement
    {
        protected override object CreateBehavior()
        {
            return new MessageInspectorBehavior();
        }

        public override Type BehaviorType
        {
            get
            {
                return typeof(MessageInspectorBehavior);
            }
        }
    }
}