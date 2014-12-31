public class bubbleSort{
  public static void main(String[] args){
    int []numbers = {65, 0, 24, 2, 65, 34, 16};

    sort(numbers);
    printArray(numbers);

  }

  public static int[] sort(int[] Arr){
    for(int i = 0; i < Arr.length; i++){
      for(int j=i; j < Arr.length; j++){
        if(Arr[j] < Arr[i]){
          int temp = Arr[i];
          Arr[i] = Arr[j];
          Arr[j] = temp;
        }
      }
    }
    return Arr;
  }

  public static void printArray(int[] Arr){
    for(int i = 0; i < Arr.length; i++){
      System.out.println(Arr[i]);
    }
  }

}
