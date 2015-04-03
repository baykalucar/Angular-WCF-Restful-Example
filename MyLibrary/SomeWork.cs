using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Runtime.Serialization;

namespace MyLibrary
{
    public class SomeWork
    {
        public static WorkResult DoWork(WorkRequest req)
        {
            WorkResult res = new WorkResult();

            if(!String.IsNullOrEmpty(req.WorkParam))
            {
                System.Threading.Thread.Sleep(2000);
                Random rnd = new Random();
                res.WorkId = rnd.Next(1, 99);
                res.WorkResultValue = 10f * rnd.NextDouble();
                res.WorkTime = DateTime.Now;
            }
            return res;
        }
    }

    [DataContract]
    public class WorkResult
    {
        [DataMember]
        public int WorkId { get; set; }

        [DataMember]
        public double WorkResultValue { get; set; }

        [DataMember]
        public DateTime WorkTime { get; set; }
    }

    [DataContract]
    public class WorkRequest
    {
        [DataMember]
        public string WorkParam;
    }
}
