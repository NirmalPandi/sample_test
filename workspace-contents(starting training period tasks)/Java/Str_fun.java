import java.io.*;
import java.util.*;
public class Str_fun {
	public static void main(String args[])
	{
		String str1="nirmal";
		String str2="pandi";
		String str=str1.concat(str2);
		System.out.println("Concatenated string  = " +str);
		System.out.println("String length = " + str.length());
		System.out.println("Character at 3rd position = "+ str.charAt(3));
		 System.out.println("Substring " + str.substring(6));
		 System.out.println("Index of pandi " + 
                 str.indexOf("pandi"));
		 String str3 = str.replace('i' ,'n') ;
		 System.out.println("Replaced string "+ str3);

		 
	}

}
