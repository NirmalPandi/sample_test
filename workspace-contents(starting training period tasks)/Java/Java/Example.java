import java.io.*;
	import java.util.*;
public class Example {
	
	
		static int a=8;
		String b;
		static void funct(int c)
		{
		 System.out.println("static method result is "+(a+c));
		}
		Example(String name)
		{
			this.b=name;
		}
		void fun1()
		{
			System.out.println("instant method is "+b);
			
		}
		public static void main(String args[])
		{
			Example obj=new Example("nirmal");
			funct(10);
			obj.fun1();
		}

	}


