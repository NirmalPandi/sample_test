

abstract class Plane
{
	abstract void type();
}
 class King extends Plane{
	 void type()
	 {
		 System.out.println("It is KingFisher");
	 }
	 void type1()
	 {
		System.out.println("It is KingFisher 111"); 
	 }
 }
 class Jet extends Plane{
	 void type()
	 {
		 System.out.println("It is jet airways");
	 }
	 void type2()
	 {
		System.out.println("It is KingFisher 222"); 
	 }
 }
 
 class Test1{
	 public static void main(String args[])
	 {
		 Plane obj = new King();
		 Plane obj1= new Jet();
		
		 obj.type();
		 obj1.type();
		 
	 }
 }