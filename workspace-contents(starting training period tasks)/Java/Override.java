 class Sub{
	String z;
	void fun(String a,String b)
	{
		z=a+b;
		System.out.println(z);
	}

}

public class Override extends Sub{
	void fun(String a,String b)
	{
		z=a+b;
		System.out.println(z);
	}
	
	public static void main(String args[])
	{
		Override obj=new Override();
		obj.fun("nirmal","pandi");
	}
}

