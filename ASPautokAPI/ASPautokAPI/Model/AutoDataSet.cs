namespace ASPautokAPI.Model
{
    public class AutoDataSet
    {
        public List<Auto> Autok { get; set; } = new List<Auto>();

        public AutoDataSet()
        {
            Autok.Add(new Auto
            {
                Id = 1,
                Marka="Ford",
                Tipus="Focus",
                Rendszam="KZL-029",
                Gyartasiev=2009,
                Szin="kék"

            });

            Autok.Add(new Auto
            {
                Id = 2,
                Marka = "Fiat",
                Tipus = "Bravo",
                Rendszam = "RZH-293",
                Gyartasiev = 2011,
                Szin = "fehér"

            });

            Autok.Add(new Auto
            {
                Id = 3,
                Marka = "Renault",
                Tipus = "Fluence",
                Rendszam = "MLH-116",
                Gyartasiev = 2013,
                Szin = "barna"

            });
        }
    }
}
