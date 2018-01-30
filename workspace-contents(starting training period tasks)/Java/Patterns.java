 import java.util.Scanner;  
 class Patterns{
	 public static void main(String args[])
	 {
		  Scanner sc=new Scanner(System.in);  
		   System.out.println("Enter the row");  
			int row=sc.nextInt();  
			int max=(row*2)-1;
			int middle=(row*2)-row;
			int mid=(row*2)-row;
			int w=1;
			int z=0;
			int a=0;
			
				 for(int j =1; j <= row; j = j + 1)
				 {
                    System.out.print("\n");
					
					
					 for(int i=1;i<=max;i++)
					 {
						 if((i==middle))
						 { 
							for(int h=1;h<2*j;h++)
							System.out.print("*");
							
						 }
						else{
							System.out.print(" ");
						
						}
					}
					
					middle=middle-1;
				}
 
					   System.out.println("\n Triangle method");  
 
 
 
 for(int j =1; j <= ((2*row)-1); j = j + 1)
				 { w=j;
                    System.out.print("\n");
					
					
					 for(int i=1;i<=max;i++)
					 {
						 if((i==mid))
						 { 
							for(int h=1;h<2*(w-z);h++)
							System.out.print("*");
							
						 }
						else{
							System.out.print(" ");
						
						}
					}
					
					if(j>=((2*row)-row))
					{
						mid=mid+1;
						z=z+2;;
						
					}
					else
					{
						 
						mid=mid-1;
					}
 
 
 
 
 
 
}


System.out.print("\n diamond method \n"); 

for(int i=5;i>=1;i--){
for(int j=5;j>i;j--){
System.out.print(" ");
}
for(int k=1;k<(i*2);k++){
System.out.print("*");
a++;
}
System.out.println();
}

 System.out.println("\nSquare\n");
for(int i=0;i<5;i++){
for(int j=0;j<5;j++){
System.out.print("* ");
}
System.out.println();
}

 } 
 }































 