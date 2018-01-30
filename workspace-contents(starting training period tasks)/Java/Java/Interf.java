interface aa{
	int a=10;
	void calculate();
}
interface bb{
	int b=20;
	void print();
}
class Sample implements aa,bb{
	int c;
	public void calculate(){
		c=a+b;
	}
	public void print(){
		System.out.println(c);
	}
}






public class Interf {
	
	public static void main(String args[]){
		Sample obj=new Sample();
		obj.calculate();
		obj.print();
	}

}
