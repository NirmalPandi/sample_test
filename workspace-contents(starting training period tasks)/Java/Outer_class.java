class Outer_class{
   private int a=5;
   int b=10;
   
   class inner_class{
    private int c;
	void calculate(){
	c=a+b;
	
	}
	void display(){
	System.out.println("result is"+c);
	}
	}
	public static void main(String args[]){
Outer_class obj1= new Outer_class();
	Outer_class.inner_class obj=obj1.new inner_class();
	obj.calculate();
	obj.display();
	}
}
	
	