using Microsoft.EntityFrameworkCore;

namespace KutyakWebAPI.model
{
    public class KutyaModelData
    {
        public KutyakGoodUniqueContext context;
        public List<Kutyanevek> Kutyanevek {  get; set; }= new List<Kutyanevek>();

        public KutyaModelData()
        {
            context = new KutyakGoodUniqueContext();
            context.Kutyaneveks.Load();
            context.Kutyafajtaks.Load();
            context.Kutyas.Load();
            Kutyanevek = context.Kutyaneveks.Local.ToList();
        }
    }
}
