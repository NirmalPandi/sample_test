
public class Overload {
	
	void sum(int a,int b)
	{
		System.out.println(a+b);
	}
	void sum(int a,int b,int c)
	{
		System.out.println(a+b+c);
	}
	public static void main(String args[])
	{
		Overload obj=new Overload();
		obj.sum(2,7);
		obj.sum('a','b','c');
	}

}
