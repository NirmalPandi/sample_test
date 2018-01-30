import java.util.Scanner;
public class Twod {
	public static void main(String args[]){
	
		System.out.println("enter the no of strings");
		Scanner sc=new Scanner(System.in);
		int n=sc.nextInt();
		char arr[][]=new char[n][100];
		String str1=sc.next();
		String str2=sc.next();
		char arr1[]=str1.toCharArray();
		char arr2[]=str2.toCharArray();
		for(int i=0;i<n;i++)
		{
			for(int j=0;j<str1.length();j++)
				{
				arr[i][j]=arr1[j];
				}
		    
		for(int k=0;((k<str2.length())&&(i==1));k++)
			arr[i][k]=arr2[k];
	}
		
		for(int i=0;i<n;i++)
		{ 
			System.out.println();
			for(int j=0;j<str1.length();j++)
				{
				System.out.print(arr[i][j]+" ");
				}
		    
		for(int k=0;((k<str2.length())&&(i==1));k++)
			System.out.print(arr[i][k]+" ");
	}
		
		
		
		
		
	    
	}
}
	    
	  