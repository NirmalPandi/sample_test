
public class Recursion {
	static int a=0;
	static void sample(){
		System.out.println(a+++"-"+"time calling");
		if(a<5)
		sample();
	}
	public static void main(String args[])
	{
		sample();
	}

}
